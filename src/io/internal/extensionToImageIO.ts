const extensionToIO = new Map([
  ['bmp', 'itkBMPImageIOJSBinding'],
  ['BMP', 'itkBMPImageIOJSBinding'],

  ['dcm', 'itkGDCMImageIOJSBinding'],
  ['DCM', 'itkGDCMImageIOJSBinding'],

  ['gipl', 'itkGiplImageIOJSBinding'],
  ['gipl.gz', 'itkGiplImageIOJSBinding'],

  ['hdf5', 'itkHDF5ImageIOJSBinding'],

  ['jpg', 'itkJPEGImageIOJSBinding'],
  ['JPG', 'itkJPEGImageIOJSBinding'],
  ['jpeg', 'itkJPEGImageIOJSBinding'],
  ['JPEG', 'itkJPEGImageIOJSBinding'],

  ['iwi', 'itkWASMImageIOJSBinding'],
  ['iwi.zip', 'itkWASMImageIOJSBinding'],

  ['lsm', 'itkLSMImageIOJSBinding'],

  ['mnc', 'itkMINCImageIOJSBinding'],
  ['MNC', 'itkMINCImageIOJSBinding'],
  ['mnc.gz', 'itkMINCImageIOJSBinding'],
  ['MNC.GZ', 'itkMINCImageIOJSBinding'],
  ['mnc2', 'itkMINCImageIOJSBinding'],
  ['MNC2', 'itkMINCImageIOJSBinding'],

  ['mgh', 'itkMGHImageIOJSBinding'],
  ['mgz', 'itkMGHImageIOJSBinding'],
  ['mgh.gz', 'itkMGHImageIOJSBinding'],

  ['mha', 'itkMetaImageIOJSBinding'],
  ['mhd', 'itkMetaImageIOJSBinding'],

  ['mrc', 'itkMRCImageIOJSBinding'],

  ['nia', 'itkNiftiImageIOJSBinding'],
  ['nii', 'itkNiftiImageIOJSBinding'],
  ['nii.gz', 'itkNiftiImageIOJSBinding'],
  ['hdr', 'itkNiftiImageIOJSBinding'],

  ['nrrd', 'itkNrrdImageIOJSBinding'],
  ['NRRD', 'itkNrrdImageIOJSBinding'],
  ['nhdr', 'itkNrrdImageIOJSBinding'],
  ['NHDR', 'itkNrrdImageIOJSBinding'],

  ['png', 'itkPNGImageIOJSBinding'],
  ['PNG', 'itkPNGImageIOJSBinding'],

  ['pic', 'itkBioRadImageIOJSBinding'],
  ['PIC', 'itkBioRadImageIOJSBinding'],

  ['tif', 'itkTIFFImageIOJSBinding'],
  ['TIF', 'itkTIFFImageIOJSBinding'],
  ['tiff', 'itkTIFFImageIOJSBinding'],
  ['TIFF', 'itkTIFFImageIOJSBinding'],

  ['vtk', 'itkVTKImageIOJSBinding'],
  ['VTK', 'itkVTKImageIOJSBinding'],

  ['isq', 'itkScancoImageIOJSBinding'],
  ['ISQ', 'itkScancoImageIOJSBinding'],

  ['fdf', 'itkFDFImageIOJSBinding'],
  ['FDF', 'itkFDFImageIOJSBinding']
])

export default extensionToIO
