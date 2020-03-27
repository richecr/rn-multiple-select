![npm](https://img.shields.io/npm/dm/rn-multiple-select?style=for-the-badge)
![npm](https://img.shields.io/npm/v/rn-multiple-select?style=for-the-badge)
# [rn-multiple-select](https://www.npmjs.com/package/rn-multiple-select)
Repositório para o código da biblioteca de seleção múltipla para o React Native

## Install

```shell
$ npm i rn-multiple-select
```

## Required Props

- `options` | Array
- `onSelected` | Function

## Basic Example

```js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectMultiple from "./SelectMultiple";

export default function App() {
  const [dados, setDados] = useState([
    {
      label: "Arroz branco", 
      value: "1",
      nomeCategoria: "Arroz"
    },
    {
      label: "Arroz refogado", 
      value: "2",
      nomeCategoria: "Arroz"
    },
    {
      label: "Feijão preto", 
      value: "3",
      nomeCategoria: "Feijões"
    },
    {
      label: "Feijão carioquinha", 
      value: "4",
      nomeCategoria: "Feijões"
    },
    {
      label: "Parafuso", 
      value: "5",
      nomeCategoria: "Macarrão"
    },
    {
      label: "Macarrão no molho", 
      value: "6",
      nomeCategoria: "Macarrão"
    },
  ]);

  function onSelectionsChange(data, item) {
    console.log(data, item); 
  }

  return (
    <View style={styles.container}>
      <SelectMultiple
        options={dados}
        onSelected={onSelectionsChange} 
        styles={{
          containerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          },
          checkedColor: 'green',
        }}
        size={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

## Properties

| Prop                        | Default | type     | Desc                                                                                                               |
| --------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| options | null | `array` of `object` | The items |
| onSelected | null | `funct` | Função a ser chamada após um item ser selecionado, passando os items selecionados e o novo item que foi clicado, seja selecionando ou deselecionando o item. |
| styles | {} | `object` | Estilização para os checkboxs |
| iconType | 'font-awesome' | `string` | Tipo do ícone |
| size | 24 | `number` | Tamanho da caixa de seleção |
| iconRight | false | `boolean` | Ícone a direita do texto |
| checkedIcon | 'check-square-o' | `string` ou `React Native Component` | Ícone padrão marcado |
| uncheckedIcon | 'square-o' | `string` ou `React Native Component` | Ícone padrão desmarcado |
| checkedTitle | none | `string` | Especifique uma mensagem para um checkbox marcado |

- Props de `styles`:
    - `containerStyle`: Estilo do container principal do checkbox(background e etc).
    - `textStyle`: Estilo do texto.
    - `checkedColor`: Cor padrão para um item selecionado.
    - `uncheckedColor`: Cor padrão para um item deselecionado.
    - `fontFamily`: A font-family dos textos.