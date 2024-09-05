import SearchInput from '@/components/search';
import Table from '@/components/table';

export default function Requests() {
    const tableColumns = [
        { name: 'Name', value: 'name' },
        { name: 'Country', value: 'country' },
        { name: 'Gender', value: 'gender' },
        { name: 'Status', value: 'status' }
    ];

    return (
        <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex justify-end items-center">
                <SearchInput className="max-w-[500px] bg-white rounded-full" />
            </div>
            <Table data={[]} columns={tableColumns} />
        </div>
    );
}
