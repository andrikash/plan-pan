import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetApiAuthProfile } from "~/api/auth/auth";
import { useGetApiOrders } from "~/api/orders/orders";
import { H2Title } from "~/components/typography/h2-title.component";
import { MainText } from "~/components/typography/main-text.component";
import { SecondaryText } from "~/components/typography/secondary-text.component";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Locales } from "~/const/constants";
import { cn } from "~/lib/utils";
import { GetApiOrdersStatus } from "~/types/api";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { data: user } = useGetApiAuthProfile({
    query: {
      retry: false, // Don't retry on failure
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchInterval: false, // Don't poll
      refetchOnReconnect: false, // Don't refetch on reconnect
    },
  });
  const [searchByEmail, setSearchByEmail] = useState<undefined | string>(
    undefined
  );
  const [debouncedSearchByEmail, setDebouncedSearchByEmail] = useState<
    undefined | string
  >(undefined);
  const [status, setStatus] = useState<GetApiOrdersStatus | "all" | undefined>(
    undefined
  );

  // Debounce searchByEmail
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchByEmail(searchByEmail);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchByEmail]);

  const { data: orders } = useGetApiOrders(
    {
      pageNumber: 1,
      pageSize: 10,
      status: status === "all" ? undefined : status,
      email: debouncedSearchByEmail,
    },
    {
      query: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchOnReconnect: false,
      },
    }
  );

  const rows = orders?.data?.data ?? [];

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toISOString().split("T")[0].replace(/-/g, ".");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-500"; // In progress
      case "completed":
        return "text-green-500"; // Completed
      case "canceled":
        return "text-red-500"; // Canceled
      default:
        return "text-gray-500";
    }
  };

  const orderStatuses: GetApiOrdersStatus[] = Object.values(GetApiOrdersStatus);
  return (
    <div className="px-20 py-20">
      <H2Title
        title={t("myOrders", {
          defaultValue: "My orders",
        })}
        className="mb-10"
      />
      <div className="mb-6 flex gap-x-10">
        <div className="w-80">
          <Input
            placeholder={t("searchOrdersByEmail", {
              defaultValue: "Search orders by email...",
            })}
            type="search"
            onChange={(e) => setSearchByEmail(e.target.value)}
          />
        </div>
        <div className="w-80">
          <Select
            onValueChange={(value: GetApiOrdersStatus | "all") =>
              setStatus(value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={t("filterByStatus", {
                  defaultValue: "Filter by status",
                })}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <SecondaryText
                  text={t("orderStatus.all", {
                    defaultValue: "All",
                  })}
                />
              </SelectItem>
              {orderStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  <SecondaryText
                    text={t(`orderStatus.${status}`, {
                      defaultValue:
                        status.charAt(0).toUpperCase() + status.slice(1),
                    })}
                  />
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="border-spacing-0 border-separate">
        {rows.length === 0 && (
          <TableCaption>
            <SecondaryText
              text={t("noOrders", {
                defaultValue: "No orders found",
              })}
            />
          </TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="rounded-tl-xl bg-gray-10 border-t border-l border-t-white border-l-white">
              <SecondaryText
                text={t("orderNo", {
                  defaultValue: "Order No.",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white">
              <SecondaryText
                text={t("workTypeHeader", {
                  defaultValue: "Work Type",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white">
              <SecondaryText
                text={t("email", {
                  defaultValue: "Email",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white">
              <SecondaryText
                text={t("subject", {
                  defaultValue: "Subject",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white">
              <SecondaryText
                text={t("createdAt", {
                  defaultValue: "Created At",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white">
              <SecondaryText
                text={t("deadline", {
                  defaultValue: "Deadline",
                })}
                className="font-semibold"
              />
            </TableHead>
            <TableHead className="bg-gray-10 border-t border-t-white rounded-tr-xl border-r border-r-white">
              <SecondaryText
                text={t("status", {
                  defaultValue: "Status",
                })}
                className="font-semibold"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((order) => (
            <TableRow
              key={order._id}
              className="bg-white cursor-pointer"
              onClick={() => navigate(`order/${order._id}`)}
            >
              <TableCell className="flex items-center gap-x-2">
                <SecondaryText
                  text={t("shortNumber", {
                    defaultValue: "No.",
                  })}
                />
                {order.orderId}
              </TableCell>
              <TableCell>
                {order.workType === "term-paper"
                  ? "Term Paper"
                  : order.workType === "thesis"
                  ? "Thesis"
                  : order.workType === "coursework"
                  ? "Coursework"
                  : "Other"}
              </TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.subjectArea}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell>{formatDate(order.deadline)}</TableCell>
              <TableCell className={getStatusColor(order.status)}>
                {order.status === "pending" ? (
                  <SecondaryText
                    text={t("inProgress", {
                      defaultValue: "In Progress",
                    })}
                  />
                ) : order.status === "completed" ? (
                  <SecondaryText
                    text={t("completed", {
                      defaultValue: "Completed",
                    })}
                  />
                ) : order.status === "canceled" ? (
                  <SecondaryText
                    text={t("canceled", {
                      defaultValue: "Canceled",
                    })}
                  />
                ) : (
                  "—"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
