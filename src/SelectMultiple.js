import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { CheckBox } from "react-native-elements";

const SelectMultiple = (props) => {
	const [optionsSelect, setOptionsSelect] = useState(props.options);

	useEffect(() => {
		preprocessOption();
	}, []);

	function preprocessOption() {
		const aux = [];
		props.options.forEach(e => {
			const op = { label: e.label, value: e.value, checked: false, nomeCategoria: e.nomeCategoria };
			aux.push(op);
		});

		setOptionsSelect(aux);
	}

	function onSelected(data, item) {
		const aux = [];
		data.forEach(element => {
			if(element.checked){
				aux.push(element);
			}
		});

		props.onSelected(aux, item);
	}

	return (
		<View>
			{optionsSelect.length > 0 && <View>
				{optionsSelect.map(e => {
					return (
						<CheckBox
							containerStyle={{
								backgroundColor: 'transparent',
								borderColor: 'transparent',
							}}
							key={e.value}
							title={e.label}
							checked={e.checked}
							onPress={() => {
								const c = [];
								optionsSelect.forEach(el => {
									if (e !== el) {
										c.push(el);
									} else {
										e.checked = !e.checked;
										c.push(e);
									}
								});

								setOptionsSelect(c);
								onSelected(optionsSelect, e);
							}}
							/>)
				})}
			</View>
			}
		</View>
	);
}

export default SelectMultiple;