// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function converts the degrees from fahrenheit to celsius
 */
function convert() {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value);

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = '<p>The  temperature in celsius is: ' + celsius.toFixed(2) + '°<p>'
  }
