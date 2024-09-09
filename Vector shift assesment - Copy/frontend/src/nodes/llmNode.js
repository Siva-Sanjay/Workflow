// llmNode.js
import { Template } from './template';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {




  return(
    <Template
    id={id}
    title="LLM"
    sub="This is a LLM"
    lefthandle= {2}
    righthandle ={1}
    ins={0}
   
    />
  )


  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-system`}
  //       style={{top: `${100/3}%`}}
  //     />
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-prompt`}
  //       style={{top: `${200/3}%`}}
  //     />
  //     <div>
  //       <span>LLM</span>
  //     </div>
  //     <div>
  //       <span>This is a LLM.</span>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-response`}
  //     />
  //   </div>
  // );
}
