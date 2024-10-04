#!/bin/bash

echo "running build..."
npm run build
echo "copying to VPS..."
cd build
scp -r . avenica@67.227.249.162:/home/avenica/usaa-haalo.avenica.com
cd ..
