"use client";

import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";

interface INFTProps {
  id: number;
  name: string;
  userName: string;
  price: number;
}

const defaultData: INFTProps[] = [
  {
    id: 1,
    name: "NFT Artwork 1",
    userName: "artist123",
    price: 50,
  },
  {
    id: 2,
    name: "NFT Collectible 1",
    userName: "collector456",
    price: 100,
  },
  {
    id: 3,
    name: "Digital Painting",
    userName: "painter789",
    price: 75,
  },
  {
    id: 4,
    name: "Crypto Kitty",
    userName: "cryptocatlover",
    price: 200,
  },
  {
    id: 5,
    name: "Abstract NFT",
    userName: "abstract_artiste",
    price: 150,
  },
];

const Page = () => {
  const [data, setData] = useState<INFTProps[]>([...defaultData]);
  const [editModal, setEditModal] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({
    isOpen: false,
    id: null,
  });

  const columnHelper = createColumnHelper<INFTProps>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "NAME",
    }),
    columnHelper.accessor("price", {
      cell: (info) => info.getValue(),
      header: "PRICE",
    }),
    columnHelper.accessor("userName", {
      cell: (info) => info.getValue(),
      header: "USERNAME",
    }),
    columnHelper.accessor(() => "actions", {
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

      header: "ACTIONS",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-6 py-3">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-6 py-4">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default Page;
