import { Button } from '@/components/ui/button'
import React from 'react'
import { Handle, Position } from 'reactflow'

const Condition = () => {
    return (
        <div className="flex justify-center w-72 h-20">
            <Handle type="target" position={Position.Top} isConnectable={false} style={{
                border: '0px solid #b1b1b7',
                borderRadius: 0,
                width: 2,
                minWidth: 2,
                background: '#b1b1b7',
            }} />
            <Button className={'bg-[#f472b6]'}> Case </Button>
            <Handle type="source" position={Position.Bottom} isConnectable={false} style={{
                border: '0px solid #b1b1b7',
                borderRadius: 0,
                width: 2,
                minWidth: 2,
                background: '#b1b1b7',
            }} />
        </div>
    )
}

export default Condition