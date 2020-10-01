import React, { useEffect, useState } from 'react';
import { View, ToastAndroid } from 'react-native';

import { CheckBox } from 'react-native-elements';

import PropTypes from 'prop-types';

const SelectMultiple = (props) => {
  const [optionsToSelect, setOptionsToSelect] = useState([]);

  useEffect(() => {
    loadOptions();
  }, []);

  function loadOptions() {
    const { options } = props;

    const aux = [];
    options.forEach((e) => {
      aux.push({
        label: e.label,
        value: e.value,
        checked: false,
      });
    });

    setOptionsToSelect(aux);
  }

  function getOptionsSelected() {
    return optionsToSelect.filter((option) => option.checked).length;
  }

  function onSelected(item) {
    const optionsSelected = optionsToSelect.filter((option) => option.checked);

    props.onSelected(optionsSelected, item);
  }

  function clickCheckbox(e) {
    const options = [...optionsToSelect];
    const index = options.indexOf(e);
    options[index].checked = !e.checked;

    if (getOptionsSelected() > props.maxSelected) {
      options[index].checked = !e.checked;
      ToastAndroid.show(props.messageMaxSelected, ToastAndroid.SHORT);
    } else {
      setOptionsToSelect(options);
      onSelected(e);
    }
  }

  return (
    <View>
      {optionsToSelect.length > 0 && (
        <View>
          {optionsToSelect.map((e) => (
            <CheckBox
              iconType={props.iconType}
              size={props.size}
              iconRight={props.iconRight}
              checkedIcon={props.checkedIcon}
              uncheckedIcon={props.uncheckedIcon}
              checkedTitle={props.checkedTitle}
              containerStyle={props.styles.containerStyle}
              textStyle={props.styles.textStyle}
              checkedColor={props.styles.checkedColor}
              uncheckedColor={props.styles.uncheckedColor}
              fontFamily={props.styles.fontFamily}
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

SelectMultiple.defaultProps = {
  styles: {
    containerStyle: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
  messageMaxSelected: 'Maximum items already selected',
};

SelectMultiple.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      nomeCategoria: PropTypes.string,
    })
  ).isRequired,
  messageMaxSelected: PropTypes.string,
  maxSelected: PropTypes.number,
  onSelected: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    checkedColor: PropTypes.string,
    uncheckedColor: PropTypes.string,
    fontFamily: PropTypes.string,
  }),
  iconType: PropTypes.string,
  size: PropTypes.number,
  iconRight: PropTypes.bool,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  checkedTitle: PropTypes.string,
};

export default SelectMultiple;
