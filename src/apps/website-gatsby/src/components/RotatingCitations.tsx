import * as React from 'react';
import { useInterval } from '../hooks/useInterval';

export interface CitationProps {
    message: string;
    author: string;
  }

export function RotatingCitation(props: {citations: CitationProps[], period: number}) {
    const [index, setIndex] = React.useState(0);
    const currentCitation = props.citations[index];
  
    useInterval(props.period, () => {
      setIndex((currentIndex) => (currentIndex + 1) % (props.citations.length));
    });
  
    return (
      <div className="bg-white p-4">
        <blockquote>
          <p>{currentCitation.message}</p>
        </blockquote>
        <p className="italic">—{currentCitation.author}</p>
        <div className="mt-4 flex flex-row justify-center space-x-5">
          {props.citations.map((_, i) => (
            <div key={i} onClick={() => setIndex(i)} className={`border border-black h-2 w-4 h-4 rounded-full cursor-pointer ${i === index ? 'bg-primary' : ''}`}></div>
          ))}
        </div>
      </div>
    )
  }