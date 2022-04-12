/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { FC } from 'react'
import React from 'react'
import {
  ComponentsProvider,
  Flex,
  FlexItem,
  Heading,
  ProgressCircular,
} from '@looker/components'
import type { ThemeOverrides } from '@looker/extension-utils'

export interface LoaderProps {
  themeOverrides: ThemeOverrides
  message?: string
}

export const Loader: FC<LoaderProps> = ({
  themeOverrides,
  message = 'Loading API Specifications',
}) => (
  <ComponentsProvider {...themeOverrides}>
    <Flex flexDirection="column" justifyContent="center" mt="25%">
      <FlexItem alignSelf="center">
        <ProgressCircular size="large" />
      </FlexItem>
      <FlexItem mt="large" alignSelf="center">
        <Heading color="key" as="h2">
          {message}
        </Heading>
      </FlexItem>
    </Flex>
  </ComponentsProvider>
)
