import React, {useEffect, useRef, useState} from "react"
import { FC } from "react"

import { TaskSpaceEditor } from "./TaskSpaceEditor"
import { useParams } from "react-router-dom";
import { EditorHandler, socket } from "../../sockets/socket"


export const TaskSpaceEditorContainer: FC = () => {
  const { alias } = useParams()
  const [codeState, setCodeState] = useState<string>('');

  const onCodeChange = (code:string) => {
      socket.sendCode(code, alias)
  }
  const editorEventhandler:EditorHandler = ({code}) => {
    setCodeState(code)
  }
  useEffect(() => {
    socket.subscribeEditor(alias, editorEventhandler)
  }, [alias])


  return <TaskSpaceEditor onCodeChange={onCodeChange} codeState={codeState}/>
}
