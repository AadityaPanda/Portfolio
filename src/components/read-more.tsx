
'use client';

import { useState } from 'react';
import { Button } from './ui/button';

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

export function ReadMore({ text, maxLength }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button
        variant="link"
        onClick={toggleReadMore}
        className="p-0 h-auto mt-2"
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </Button>
    </div>
  );
}
