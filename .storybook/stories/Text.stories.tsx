import * as React from 'react'
import { DoubleSide, Vector3 } from 'three'

import { Setup } from '../Setup'
import { useTurntable } from '../useTurntable'

import { Text } from '../../src'

export default {
  title: 'Abstractions/Text',
  component: Text,
  decorators: [(storyFn) => <Setup cameraPosition={new Vector3(0, 0, 200)}>{storyFn()}</Setup>],
}

function TextScene() {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        color={'#EC2D2D'}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
    </React.Suspense>
  )
}

export const TextSt = () => <TextScene />
TextSt.storyName = 'Default'

function TextOutlineScene() {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        color={'#EC2D2D'}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={2}
        outlineColor="#ffffff"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
    </React.Suspense>
  )
}

function TextStrokeScene() {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0}
        strokeWidth={'2.5%'}
        strokeColor="#ffffff"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
    </React.Suspense>
  )
}

function TextShadowScene() {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        color={'#EC2D2D'}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        outlineOffsetX={'10%'}
        outlineOffsetY={'10%'}
        outlineBlur={'30%'}
        outlineOpacity={0.3}
        outlineColor="#EC2D2D"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
    </React.Suspense>
  )
}

function TextRtlScene() {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        color={'#EC2D2D'}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'right'}
        direction={'auto'}
        font="https://fonts.gstatic.com/s/scheherazade/v20/YA9Ur0yF4ETZN60keViq1kQgtA.woff"
        anchorX="center"
        anchorY="middle"
      >
        إن عدة الشهور عند الله اثنا عشر شهرا في كتاب الله يوم خلق السماوات والارض SOME LATIN TEXT HERE منها أربعة حرم
        ذلك الدين القيم فلا تظلموا فيهن أنفسكم وقاتلوا المشركين كافة كما يقاتلونكم كافة واعلموا أن الله مع المتقين
      </Text>
    </React.Suspense>
  )
}

function CustomMaterialTextScene({ color, opacity }) {
  const ref = useTurntable()

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        fontSize={12}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        <meshBasicMaterial side={DoubleSide} color={color} transparent opacity={opacity} />
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA
        PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORUM.
      </Text>
    </React.Suspense>
  )
}

export const TextOutlineSt = () => <TextOutlineScene />
TextOutlineSt.storyName = 'Outline'

export const TextStrokeSt = () => <TextStrokeScene />
TextStrokeSt.storyName = 'Transparent with stroke'

export const TextShadowSt = () => <TextShadowScene />
TextShadowSt.storyName = 'Text Shadow'

export const TextLtrSt = () => <TextRtlScene />
TextLtrSt.storyName = 'Text Rtl'

export const CustomMaterialTextSt = (args) => <CustomMaterialTextScene {...args} />
CustomMaterialTextSt.storyName = 'Custom Material'
CustomMaterialTextSt.args = {
  color: '#EC2D2D',
  opacity: 1,
}
CustomMaterialTextSt.argTypes = {
  color: { control: 'color' },
  opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
}
