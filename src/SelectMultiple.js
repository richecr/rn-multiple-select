import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { CheckBox } from 'react-native-elements';

import PropTypes from 'prop-types';

const SelectMultiple = props => {
  const [optionsToSelect, setOptionsToSelect] = useState([]);

  useEffect(() => {
    loadOptions();
  }, []);

  function loadOptions() {
    const { options } = props;

    const aux = [];
    options.forEach(e => {
      aux.push({
        label: e.label,
        value: e.value,
        checked: false,
      });
    });

    setOptionsToSelect(aux);
  }

  function onSelected(item) {
    const optionsSelected = optionsToSelect.filter(option => option.checked);

    props.onSelected(optionsSelected, item);
  }

  function clickCheckbox(e) {
    const options = [...optionsToSelect];
    const index = options.indexOf(e);
    options[index].checked = !e.checked;

    setOptionsToSelect(options);
    onSelected(e);
  }

  return (
    <View>
      {optionsToSelect.length > 0 && (
        <View>
          {optionsToSelect.map(e => (
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              key={e.value}
              title={e.label}
              checked={e.checked}
              onPress={() => clickCheckbox(e)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

SelectMultiple.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      nomeCategoria: PropTypes.string,
    })
  ).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default SelectMultiple;
