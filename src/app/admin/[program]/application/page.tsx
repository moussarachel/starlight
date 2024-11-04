import { columns, mock } from "@/data/admin/applications";
import DataTable from "@/components/global/table/data-table";

const Page = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <DataTable columns={columns} data={mock} />
    </div>
  );
};

export default Page;
