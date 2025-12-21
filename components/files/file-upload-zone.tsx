'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatFileSize } from '@/lib/utils';

interface UploadedFile {
    id: string;
    file: File;
    preview?: string;
}

interface FileUploadZoneProps {
    onFilesChange?: (files: UploadedFile[]) => void;
    maxFiles?: number;
    accept?: Record<string, string[]>;
}

export function FileUploadZone({
    onFilesChange,
    maxFiles = 5,
    accept = {
        'application/pdf': ['.pdf'],
        'image/*': ['.png', '.jpg', '.jpeg'],
    },
}: FileUploadZoneProps) {
    const [files, setFiles] = useState<UploadedFile[]>([]);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const newFiles = acceptedFiles.map((file) => ({
                id: `${file.name}-${Date.now()}`,
                file,
                preview: file.type.startsWith('image/')
                    ? URL.createObjectURL(file)
                    : undefined,
            }));

            const updatedFiles = [...files, ...newFiles].slice(0, maxFiles);
            setFiles(updatedFiles);
            onFilesChange?.(updatedFiles);
        },
        [files, maxFiles, onFilesChange]
    );

    const removeFile = (id: string) => {
        const updatedFiles = files.filter((f) => f.id !== id);
        setFiles(updatedFiles);
        onFilesChange?.(updatedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxFiles: maxFiles - files.length,
        disabled: files.length >= maxFiles,
    });

    const getFileIcon = (type: string) => {
        if (type.startsWith('image/')) return Image;
        if (type === 'application/pdf') return FileText;
        return File;
    };

    return (
        <div className="space-y-4">
            {/* Dropzone */}
            <div
                {...getRootProps()}
                className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-colors duration-200
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
          ${files.length >= maxFiles ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
        `}
            >
                <input {...getInputProps()} />
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                {isDragActive ? (
                    <p className="text-primary font-medium">Drop the files here...</p>
                ) : (
                    <>
                        <p className="font-medium">
                            Drag & drop files here, or click to select
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            PDF, PNG, JPG up to 10MB each (max {maxFiles} files)
                        </p>
                    </>
                )}
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="space-y-2">
                    {files.map((uploadedFile) => {
                        const FileIcon = getFileIcon(uploadedFile.file.type);
                        return (
                            <div
                                key={uploadedFile.id}
                                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                            >
                                {uploadedFile.preview ? (
                                    <img
                                        src={uploadedFile.preview}
                                        alt={uploadedFile.file.name}
                                        className="h-10 w-10 object-cover rounded"
                                    />
                                ) : (
                                    <FileIcon className="h-10 w-10 text-muted-foreground p-2 bg-background rounded" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">
                                        {uploadedFile.file.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {formatFileSize(uploadedFile.file.size)}
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => removeFile(uploadedFile.id)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
