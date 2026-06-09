import * as React from 'react';

export function MultiParagraphs({paragraphs}: {paragraphs: React.ReactNode[]}) {
    return (
        <div className="flex flex-col space-y-2">
            {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
            ))}
        </div>
    )
}