interface ReadDICOMTagsResult {
  webWorker: Worker

  tags: Map<string, string>
}

export default ReadDICOMTagsResult
