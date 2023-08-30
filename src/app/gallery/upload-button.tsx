"use client"

import { CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// import { CldUploadButton } from 'next-cloudinary';
// import { UploadResult } from '../page';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/router'; // Import from 'next/router' instead of 'next/navigation'

export default function UploadButton() {
    const router = useRouter();

    const handleUpload = (result: UploadResult) => {
        setTimeout(()=>{
            console.log("refresh");
            router.refresh(); // Use reload() instead of refresh() to reload the current page
        }, 1000)
    };

    return (
        <Button asChild>
            <CldUploadButton 
                onUpload={handleUpload} // Use the defined function here
                uploadPreset="s8ku6lee"
            >
                <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 7.5L12 3M12 3l4.5 4.5M12 3v13.5" />
                </svg>
                Upload
                </div>
            </CldUploadButton>
        </Button>
    );
}
