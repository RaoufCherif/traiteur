#!/bin/bash


FILE=jest.config.ts

if [ "$FILE" ]; 
 then 
    rm -- $FILE
    echo "File deleted ! "
 else
  echo " File not found ! "
fi


if [ -d __tests__ ];
 then
   rm -r __tests__
   echo "Folder deleted"
 else
   echo "Folder not found !"
fi
npm run build