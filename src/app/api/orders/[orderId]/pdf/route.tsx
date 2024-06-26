import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import React from 'react';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

function mirrorArray(arr: Array<any>): Array<any> {
    let mirrored = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            mirrored.push(arr[i + 1]);
        }
        mirrored.push(arr[i]);
    }
    return mirrored;
}


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100%',
        width: '100%',
    },
    flashcard_front: {
        width: '50%',
        height: '20%',
        display: 'flex',
        border: '1px dashed #000',
        justifyContent: 'center',
        padding: 15,
    },
    flashcard_back: {
        width: '50%',
        height: '20%',
        border: '1px dashed #000',
        justifyContent: 'space-between',
        padding: 15,
    },
    word: {
        fontSize: 24,
        textAlign: 'center',
    },
    details: {
        fontSize: 12.5,
        margin: '0',
    },
});

const chunkFlashcards = (flashcards: any, size: number) => {
    const chunks = [];
    for (let i = 0; i < flashcards.length; i += size) {
        chunks.push(flashcards.slice(i, i + size));
    }
    return chunks;
};

const FlashcardPDF = ({ flashcards }: { flashcards: any}) => {
    const chunkedFlashcards = chunkFlashcards(flashcards, 15);

    return (
        <Document>
            {chunkedFlashcards.map((chunk, index) => (
                <React.Fragment key={index}>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.grid}>
                            {chunk.map((flashcard: any, idx: number) => (
                                <View key={idx} style={styles.flashcard_front}>
                                    <Text style={styles.word}>{flashcard.word}</Text>
                                </View>
                            ))}
                        </View>
                    </Page>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.grid}>
                            {mirrorArray(chunk).map((flashcard, idx) => (
                                <View key={idx} style={styles.flashcard_back}>
                                    <Text style={[{fontSize: '14', color: 'rgb(34 197 94)', alignSelf: 'flex-start'},styles.details]}>{flashcard.word} | {flashcard.part_of_speech}</Text>
                                    <Text style={styles.details}>{flashcard.definition}</Text>
                                    <Text style={{ marginTop: '5px', ...styles.details }}>{flashcard.sentence}</Text>
                                </View>
                            ))}
                        </View>
                    </Page>
                </React.Fragment>
            ))}
        </Document>
    );
};

export async function GET(req: Request, { params }: { params: { orderId: string } }) {
    try {
        const { orderId } = params;

        const { rows } = await sql`
            SELECT 
                f.flashcard_id,
                f.word_id,
                w.word,
                w.definition,
                w.part_of_speech,
                s.sentence
            FROM flashcards f
            JOIN words w ON f.word_id = w.word_id
            JOIN sentences s ON f.sentence_id = s.sentence_id
            JOIN orders o ON f.order_id = o.order_id
            WHERE o.paypal_order_id = ${orderId}
        `;
        const flashcards = rows;

        // Generate the PDF
        const pdfDoc = pdf();
        pdfDoc.updateContainer(<FlashcardPDF flashcards={flashcards} />);
        const pdfBuffer = await pdfDoc.toBuffer();
        
        return new NextResponse(pdfBuffer as any, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=flashcards.pdf',
            },
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: `Error ${error}` }), { status: 500 });
    }
}