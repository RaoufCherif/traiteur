#!/bin/bash


FILE=jest.config.ts

if [ "$FILE" ]; 
 then 
    rm -- $FILE
    echo "File deleted ! "
else
  echo " File not found ! "
  cd
fi


if [ -d __test__ ]; then
rm -rf __test__
echo "Folder deleted"
fi