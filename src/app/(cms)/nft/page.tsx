"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  ColumnDefBase,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "@/app/components/common/Table";
import { INFTProps } from "@/interfaces/common/interface";
import { FAKE_NFT_DATA } from "@/constants/fake-data";

const Page = () => {
  const [data, setData] = useState<INFTProps[]>([...FAKE_NFT_DATA]);
  const [editModal, setEditModal] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({
    isOpen: false,
    id: null,
  });

  const columns: ColumnDef<INFTProps>[] = [
    {
      id: "id",
      accessorKey: "id",
      header: "ID",
    },
    {
      id: "name",
      accessorKey: "name",
      header: "NAME",
    },
    {
      id: "price",
      accessorKey: "price",
      header: "PRICE",
    },
    {
      id: "userName",
      accessorKey: "userName",
      header: "USERNAME",
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: (props) => (
        <div className="flex gap-5">
          <button
            onClick={() =>
              setEditModal({
                isOpen: true,
                id: props.row.getValue("id"),
              })
            }
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </button>

          <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
            Remove
          </button>
        </div>
      ),
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default Page;
