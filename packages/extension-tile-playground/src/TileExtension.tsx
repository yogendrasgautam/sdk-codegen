/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import React, { useContext } from 'react'
import { ComponentsProvider, MessageBar } from '@looker/components'
import { ExtensionContext2 } from '@looker/extension-sdk-react'
import { MountPoint } from '@looker/extension-sdk'
import { VisualizationTile } from './components/VisualizationTile/VisualizationTile'
import { DashboardTile } from './components/DashboardTile/DashboardTile'

export const TileExtension: React.FC = () => {
  const { extensionSDK } = useContext(ExtensionContext2)
  const { lookerHostData } = extensionSDK
  return (
    <ComponentsProvider>
      {lookerHostData?.mountPoint === MountPoint.dashboardVisualization && (
        <VisualizationTile />
      )}
      {lookerHostData?.mountPoint === MountPoint.dashboardTile && (
        <DashboardTile />
      )}
      {lookerHostData?.mountPoint === MountPoint.standalone && (
        <MessageBar intent="critical">
          This extension must be mounted in a dashboard.
        </MessageBar>
      )}
    </ComponentsProvider>
  )
}