import { FileText, Image, File, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Document } from '@/lib/types';
import { formatFileSize, formatDate } from '@/lib/utils';

interface FileListProps {
    files: Document[];
    title?: string;
    showDownload?: boolean;
}

export function FileList({ files, title, showDownload = true }: FileListProps) {
    const getFileIcon = (type: string) => {
        if (type.startsWith('image/')) return Image;
        if (type === 'application/pdf') return FileText;
        return File;
    };

    if (files.length === 0) {
        return (
            <div className="text-center py-6 text-muted-foreground">
                <File className="h-10 w-10 mx-auto mb-2 opacity-50" />
                <p>No files uploaded yet</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {title && <h4 className="font-medium text-sm text-muted-foreground">{title}</h4>}
            {files.map((file) => {
                const FileIcon = getFileIcon(file.type);
                return (
                    <div
                        key={file.id}
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                        <FileIcon className="h-10 w-10 text-muted-foreground p-2 bg-background rounded" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                                {formatFileSize(file.size)} • Uploaded {formatDate(file.uploaded_at)}
                            </p>
                        </div>
                        {showDownload && (
                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                <a href={file.url} download={file.name} target="_blank" rel="noopener noreferrer">
                                    <Download className="h-4 w-4" />
                                </a>
                            </Button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
