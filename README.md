# [rn-multiple-select](https://www.npmjs.com/package/rn-multiple-select)
![npm](https://img.shields.io/npm/dm/rn-multiple-select?style=for-the-badge)
![npm](https://img.shields.io/npm/v/rn-multiple-select?style=for-the-badge)

Library for creating a custom multiple option selector for React Native

## Install

```shell
$ npm install rn-multiple-select
```

or

```shell
$ yarn add rn-multiple-select
```

## Required Props

- `options` | Array
- `onSelected` | Function

## Basic Example

```js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectMultiple from "rn-multiple-select/";

export default function App() {
  const [data, setData] = useState([
    {
      label: "White rice", 
      value: "1"
    },
    {
      label: "Black bean", 
      value: "2"
    },
    {
      label: "Sauteed rice", 
      value: "3"
    },
    {
      label: "Baked beans", 
      value: "4"
    },
    {
      label: "Spaghetti", 
      value: "5"
    },
    {
      label: "Pasta in sauce", 
      value: "6"
    },
  ]);

  function onSelectionsChange(data, item) {
    console.log(data, item); 
  }

  return (
    <View style={styles.container}>
      <SelectMultiple
        options={data}
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

| Prop                        | Default |   type   | Desciption |
| --------------------------- | ------- | -------- | ---- |
| options | null | `array` of `object` | The items |
| onSelected | null | `funct` | Function to be called after an item is selected, passing the selected items and the new item that was clicked, either selecting or deselecting the item |
| styles | {} | `object` | Stylization for checkboxes |
| iconType | 'font-awesome' | `string` | Type of Icon |
| size | 24 | `number` | Check box size |
| iconRight | false | `boolean` | Icon to the right of the text |
| checkedIcon | 'check-square-o' | `string` ou `React Native Component` | Default icon checked |
| uncheckedIcon | 'square-o' | `string` ou `React Native Component` | Default icon unchecked |
| checkedTitle | none | `string` | Specify a message for a marked checkbox |

- Prop of `styles`:
    - `containerStyle`: Checkbox main container style (background and etc).
    - `textStyle`: Style of text.
    - `checkedColor`: Default color for a selected item.
    - `uncheckedColor`: Default color for a unselected item.
    - `fontFamily`: The font-family of texts.
