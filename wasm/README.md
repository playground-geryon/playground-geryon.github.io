# Tree-sitter WebAssembly files

The `Tree-sitter Code Outline` 페이지는 브라우저에서 Tree-sitter 파서를 로드하기 위해 다음 파일을 기대합니다.

```
public/wasm/
├── tree-sitter.wasm
├── tree-sitter-java.wasm
└── tree-sitter-typescript.wasm
```

이 리포지토리에는 용량 문제로 포함되어 있지 않으므로, 필요한 언어를 직접 컴파일하거나 [tree-sitter 공식 문서](https://tree-sitter.github.io/tree-sitter/creating-parsers#generate-webassembly-bindings)를 참고하여 `.wasm` 파일을 생성한 뒤 해당 위치에 복사하세요. 파일명이 변경되면 `tree-sitter-outline.ts`에 정의된 `wasmURL`도 함께 수정해야 합니다.
