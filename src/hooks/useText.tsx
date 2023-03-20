import { useState } from "react";

import { iText } from 'src/interfaces/iText'

export default function useText<iText>() {
  const [text, setText] = useState<string>('# Teste')

  const handleSetText = (text: string) => setText(text)

  return {
    text,
    handleSetText
  }
}