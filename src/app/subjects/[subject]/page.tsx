'use client';

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FileNode, FolderData } from '@/types/subject';

// Import the sample data directly
import sampleData from '@/data/subjects/data-structure-sample.json';

// Dynamically import the SubjectPage component with no SSR
const SubjectPage = dynamic(
  () => import('@/components/subjects/SubjectPage'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    ),
  }
);

// This would come from your data source in a real app
const subjectData: Record<string, { title: string; data: FolderData }> = {
  'data-structure-using-c': {
    title: 'Data Structure using C',
    data: sampleData as unknown as FolderData
  },
  // Add other subjects here
};

export default function SubjectPageWrapper({ params }: { params: { subject: string } }) {
  const subject = subjectData[params.subject];
  
  if (!subject) {
    notFound();
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    }>
      <SubjectPage subjectName={subject.title} folderData={subject.data} />
    </Suspense>
  );
}
