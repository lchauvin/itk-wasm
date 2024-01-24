// Generated file. To retain edits, remove this comment.

import {
  JsonCompatible,
  Mesh,
  InterfaceTypes,
  PipelineOutput,
  PipelineInput,
  runPipelineNode
} from 'itk-wasm'

import ByuReadMeshNodeOptions from './byu-read-mesh-node-options.js'
import ByuReadMeshNodeResult from './byu-read-mesh-node-result.js'

import path from 'path'

/**
 * Read a mesh file format and convert it to the itk-wasm file format
 *
 * @param {string} serializedMesh - Input mesh serialized in the file format
 * @param {ByuReadMeshNodeOptions} options - options object
 *
 * @returns {Promise<ByuReadMeshNodeResult>} - result object
 */
async function byuReadMeshNode(
  serializedMesh: string,
  options: ByuReadMeshNodeOptions = {}
) : Promise<ByuReadMeshNodeResult> {

  const mountDirs: Set<string> = new Set()

  const desiredOutputs: Array<PipelineOutput> = [
    { type: InterfaceTypes.JsonCompatible },
    { type: InterfaceTypes.Mesh },
  ]

  mountDirs.add(path.dirname(serializedMesh as string))
  const inputs: Array<PipelineInput> = [
  ]

  const args = []
  // Inputs
  const serializedMeshName = serializedMesh
  args.push(serializedMeshName)
  mountDirs.add(path.dirname(serializedMeshName))

  // Outputs
  const couldReadName = '0'
  args.push(couldReadName)

  const meshName = '1'
  args.push(meshName)

  // Options
  args.push('--memory-io')
  if (options.informationOnly) {
    options.informationOnly && args.push('--information-only')
  }

  const pipelinePath = path.join(path.dirname(import.meta.url.substring(7)), 'pipelines', 'byu-read-mesh')

  const {
    returnValue,
    stderr,
    outputs
  } = await runPipelineNode(pipelinePath, args, desiredOutputs, inputs, mountDirs)
  if (returnValue !== 0 && stderr !== "") {
    throw new Error(stderr)
  }

  const result = {
    couldRead: outputs[0]?.data as JsonCompatible,
    mesh: outputs[1]?.data as Mesh,
  }
  return result
}

export default byuReadMeshNode
