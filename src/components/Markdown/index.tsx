import React from 'react';

import useText from 'src/hooks/useText'

import ReactMarkdown from 'react-markdown'


const Markdown: React.FC = () => {
  const { text } = useText()
  return <ReactMarkdown children={text} />
}

export default Markdown;