#!/bin/bash

# 修復所有從 'src/' 開頭的 import 為 '@/'
echo "開始修復 import 路徑..."

# 尋找所有需要修復的檔案
find ./src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec grep -l "from 'src/" {} \; | while read file; do
    echo "修復: $file"
    # 使用 sed 替換 'src/' 為 '@/'
    sed -i '' "s/from 'src\//from '@\//g" "$file"
done

echo "import 路徑修復完成！"
