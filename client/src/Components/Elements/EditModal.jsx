import React from 'react'
import {Dialog} from '@mui/material'

export default function EditModal(props) {


  return (
    
    <div>
        {props.type=="editModal" &&
         <Dialog open={props.openModel} sx={{height: '100%',width: '100%'}}>{props.children}</Dialog>  }
    </div>
  )
}
