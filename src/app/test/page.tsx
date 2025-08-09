import SubjectPage from '@/components/subjects/SubjectPage';
import data from '@/data/subjects/data-structure-using-c.json';

// Transform the data to match the expected type structure
const transformData = (node: any) => {
  const transformed: any = {
    name: node.name,
    type: node.type === 'file' ? 'file' as const : 'directory' as const,
    path: `/${node.name.toLowerCase().replace(/\s+/g, '-')}`,
    toggled: true,
  };

  if (node.children) {
    transformed.children = node.children.map(transformData);
  }
  
  if (node.type === 'file') {
    transformed.content = node.code || '';
    transformed.language = 'c';
    transformed.output = node.output || '';
  }

  return transformed;
};

export default function TestSubjectPage() {
  const rootNode = transformData({
    ...data,
    name: 'root',
    path: '/',
  });

  return (
    <SubjectPage 
      subjectName="Data Structures using C" 
      folderData={{ root: rootNode }} 
    />
  );
}
