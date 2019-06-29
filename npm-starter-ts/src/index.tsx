import * as React from 'react';

interface IProps {
  text: string
}

const TextElement: React.FC<IProps> = ({text}) => {
    return (
      <div>{text}</div>
    );
}

export default TextElement