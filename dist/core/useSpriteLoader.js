import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useThree, useLoader } from '@react-three/fiber';
import * as React from 'react';
import { useState } from 'react';

// utils
const getFirstItem = param => {
  if (Array.isArray(param)) {
    return param[0];
  } else if (typeof param === 'object' && param !== null) {
    const keys = Object.keys(param);
    return param[keys[0]][0];
  } else {
    return {
      w: 0,
      h: 0
    };
  }
};
const checkIfFrameIsEmpty = frameData => {
  for (let i = 3; i < frameData.length; i += 4) {
    if (frameData[i] !== 0) {
      return false;
    }
  }
  return true;
};
const calculateAspectRatio = (width, height, factor, v) => {
  const adaptedHeight = height * (v.aspect > width / height ? v.width / width : v.height / height);
  const adaptedWidth = width * (v.aspect > width / height ? v.width / width : v.height / height);
  const scaleX = adaptedWidth * factor;
  const scaleY = adaptedHeight * factor;
  const currentMaxScale = 1;
  // Calculate the maximum scale based on the aspect ratio and max scale limit
  let finalMaxScaleW = Math.min(currentMaxScale, scaleX);
  let finalMaxScaleH = Math.min(currentMaxScale, scaleY);

  // Ensure that scaleX and scaleY do not exceed the max scale while maintaining aspect ratio
  if (scaleX > currentMaxScale) {
    finalMaxScaleW = currentMaxScale;
    finalMaxScaleH = scaleY / scaleX * currentMaxScale;
  }
  return new THREE.Vector3(finalMaxScaleW, finalMaxScaleH, 1);
};
function useSpriteLoader(input, json, animationNames, numberOfFrames, onLoad) {
  const v = useThree(state => state.viewport);
  const spriteDataRef = React.useRef(null);
  const totalFrames = React.useRef(0);
  const aspectFactor = 0.1;
  const [spriteData, setSpriteData] = useState(null);
  const [spriteTexture, setSpriteTexture] = React.useState(new THREE.Texture());
  const textureLoader = new THREE.TextureLoader();
  const [spriteObj, setSpriteObj] = useState(null);
  React.useLayoutEffect(() => {
    if (json && input) {
      loadJsonAndTextureAndExecuteCallback(json, input, parseSpriteData);
    } else if (input) {
      // only load the texture, this is an image sprite only
      loadStandaloneSprite();
    }
    return () => {
      if (input) {
        useLoader.clear(TextureLoader, input);
      }
    };
  }, []);
  function loadJsonAndTexture(textureUrl, jsonUrl) {
    if (jsonUrl && textureUrl) {
      loadJsonAndTextureAndExecuteCallback(jsonUrl, textureUrl, parseSpriteData);
    } else {
      loadStandaloneSprite(textureUrl);
    }
  }
  function loadStandaloneSprite(textureUrl) {
    if (textureUrl || input) {
      new Promise(resolve => {
        textureLoader.load(textureUrl !== null && textureUrl !== void 0 ? textureUrl : input, resolve);
      }).then(texture => {
        parseSpriteData(null, texture);
      });
    }
  }

  /**
   *
   */
  function loadJsonAndTextureAndExecuteCallback(jsonUrl, textureUrl, callback) {
    const jsonPromise = fetch(jsonUrl).then(response => response.json());
    const texturePromise = new Promise(resolve => {
      textureLoader.load(textureUrl, resolve);
    });
    Promise.all([jsonPromise, texturePromise]).then(response => {
      callback(response[0], response[1]);
    });
  }
  const parseSpriteData = (json, _spriteTexture) => {
    let aspect = new THREE.Vector3(1, 1, 1);
    // sprite only case
    if (json === null) {
      if (_spriteTexture && numberOfFrames) {
        //get size from texture
        const width = _spriteTexture.image.width;
        const height = _spriteTexture.image.height;
        totalFrames.current = numberOfFrames;
        const {
          rows,
          columns,
          frameWidth,
          frameHeight,
          emptyFrames
        } = getRowsAndColumns(_spriteTexture, numberOfFrames);
        spriteDataRef.current = {
          frames: [],
          meta: {
            version: '1.0',
            size: {
              w: width,
              h: height
            },
            rows,
            columns,
            frameWidth,
            frameHeight,
            scale: '1'
          }
        };
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            const isExcluded = (emptyFrames !== null && emptyFrames !== void 0 ? emptyFrames : []).some(coord => coord.row === row && coord.col === col);
            if (isExcluded) {
              continue;
            }
            spriteDataRef.current.frames.push({
              frame: {
                x: col * frameWidth,
                y: row * frameHeight,
                w: frameWidth,
                h: frameHeight
              },
              rotated: false,
              trimmed: false,
              spriteSourceSize: {
                x: 0,
                y: 0,
                w: frameWidth,
                h: frameHeight
              },
              sourceSize: {
                w: frameWidth,
                h: frameHeight
              }
            });
          }
        }
        aspect = calculateAspectRatio(frameWidth, frameHeight, aspectFactor, v);
      }
    } else if (_spriteTexture) {
      spriteDataRef.current = json;
      spriteDataRef.current.frames = parseFrames();
      totalFrames.current = Array.isArray(json.frames) ? json.frames.length : Object.keys(json.frames).length;
      const {
        w,
        h
      } = getFirstItem(json.frames).sourceSize;
      aspect = calculateAspectRatio(w, h, aspectFactor, v);
    }
    setSpriteData(spriteDataRef.current);
    // @ts-ignore
    if ('encoding' in _spriteTexture) _spriteTexture.encoding = 3001; // sRGBEncoding
    // @ts-ignore
    else _spriteTexture.colorSpace = 'srgb';
    setSpriteTexture(_spriteTexture);
    setSpriteObj({
      spriteTexture: _spriteTexture,
      spriteData: spriteDataRef.current,
      aspect: aspect
    });
  };
  const getRowsAndColumns = (texture, totalFrames) => {
    if (texture.image) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = texture.image.width;
      canvas.height = texture.image.height;
      ctx.drawImage(texture.image, 0, 0);
      const width = texture.image.width;
      const height = texture.image.height;

      // Calculate rows and columns based on the number of frames and image dimensions
      const cols = Math.round(Math.sqrt(totalFrames * (width / height)));
      const rows = Math.round(totalFrames / cols);
      const frameWidth = width / cols;
      const frameHeight = height / rows;
      const emptyFrames = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const frameIndex = row * cols + col;
          if (frameIndex >= totalFrames) {
            emptyFrames.push({
              row,
              col
            });
            continue;
          }
          const frameData = ctx.getImageData(col * frameWidth, row * frameHeight, frameWidth, frameHeight).data;
          const isEmpty = checkIfFrameIsEmpty(frameData);
          if (isEmpty) {
            emptyFrames.push({
              row,
              col
            });
          }
        }
      }
      return {
        rows,
        columns: cols,
        frameWidth,
        frameHeight,
        emptyFrames
      };
    } else {
      return {
        rows: 0,
        columns: 0,
        frameWidth: 0,
        frameHeight: 0,
        emptyFrames: []
      };
    }
  };

  // for frame based JSON Hash sprite data
  const parseFrames = () => {
    const sprites = {};
    const data = spriteDataRef.current;
    const delimiters = animationNames;
    if (delimiters && Array.isArray(data['frames'])) {
      for (let i = 0; i < delimiters.length; i++) {
        // we convert each named animation group into an array
        sprites[delimiters[i]] = [];
        for (const value of data['frames']) {
          const frameData = value['frame'];
          const x = frameData['x'];
          const y = frameData['y'];
          const width = frameData['w'];
          const height = frameData['h'];
          const sourceWidth = value['sourceSize']['w'];
          const sourceHeight = value['sourceSize']['h'];
          if (typeof value['filename'] === 'string' && value['filename'].toLowerCase().indexOf(delimiters[i].toLowerCase()) !== -1) {
            sprites[delimiters[i]].push({
              x: x,
              y: y,
              w: width,
              h: height,
              frame: frameData,
              sourceSize: {
                w: sourceWidth,
                h: sourceHeight
              }
            });
          }
        }
      }
      return sprites;
    } else if (delimiters && typeof data['frames'] === 'object') {
      for (let i = 0; i < delimiters.length; i++) {
        // we convert each named animation group into an array
        sprites[delimiters[i]] = [];
        for (const innerKey in data['frames']) {
          const value = data['frames'][innerKey];
          const frameData = value['frame'];
          const x = frameData['x'];
          const y = frameData['y'];
          const width = frameData['w'];
          const height = frameData['h'];
          const sourceWidth = value['sourceSize']['w'];
          const sourceHeight = value['sourceSize']['h'];
          if (typeof innerKey === 'string' && innerKey.toLowerCase().indexOf(delimiters[i].toLowerCase()) !== -1) {
            sprites[delimiters[i]].push({
              x: x,
              y: y,
              w: width,
              h: height,
              frame: frameData,
              sourceSize: {
                w: sourceWidth,
                h: sourceHeight
              }
            });
          }
        }
      }
      return sprites;
    } else {
      // we need to convert it into an array
      const spritesArr = [];
      for (const key in data.frames) {
        spritesArr.push(data.frames[key]);
      }
      return spritesArr;
    }
  };
  React.useLayoutEffect(() => {
    onLoad == null || onLoad(spriteTexture, spriteData);
  }, [spriteTexture, spriteData]);
  return {
    spriteObj,
    loadJsonAndTexture
  };
}
useSpriteLoader.preload = url => useLoader.preload(TextureLoader, url);
useSpriteLoader.clear = input => useLoader.clear(TextureLoader, input);

export { calculateAspectRatio, checkIfFrameIsEmpty, getFirstItem, useSpriteLoader };