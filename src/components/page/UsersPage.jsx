import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  IconButton,
  Badge,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { TbSearch, TbPlus, TbPencil, TbTrash } from "react-icons/tb";
import { useColorModeValue } from "../ui/color-mode";

// ===== Моковые данные =====
const initialUsers = [
  {
    id: 1,
    name: "Александр Иванов",
    email: "alex@example.com",
    role: "Admin",
    status: "active",
    avatar: "АИ",
  },
  {
    id: 2,
    name: "Мария Петрова",
    email: "maria@example.com",
    role: "User",
    status: "active",
    avatar: "МП",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = useColorModeValue("white", "#09090b");
  const borderColor = useColorModeValue("#09090b", "white");
  const inputBg = useColorModeValue("white", "#1a1a1c");
  const hoverBg = useColorModeValue("gray.100", "gray.800");
  const headerBg = useColorModeValue("gray.50", "#121214");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const openCreate = () => {
    setEditingUser(null);
    setIsOpen(true);
  };

  const openEdit = (user) => {
    setEditingUser(user);
    setIsOpen(true);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const saveUser = (data) => {
    if (editingUser) {
      setUsers(
        users.map((u) => (u.id === editingUser.id ? { ...u, ...data } : u)),
      );
    } else {
      setUsers([
        ...users,
        {
          ...data,
          id: Date.now(),
          avatar: data.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase(),
        },
      ]);
    }
    setIsOpen(false);
  };

  return (
    <Flex w="100vw" h="100vh" direction="column" p="20px" bg={bgColor}>
      {/* Header */}
      <Flex
        justify="space-between"
        align="center"
        mb="20px"
        wrap="wrap"
        gap="10px"
      >
        <Heading size="lg">Пользователи</Heading>

        <Flex gap="10px">
          <Flex position="relative" w="250px">
            <Box
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
            >
              <TbSearch />
            </Box>
            <Input
              pl="30px"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bg={inputBg}
              border="2px solid"
              borderColor={borderColor}
            />
          </Flex>

          <Button onClick={openCreate} leftIcon={<TbPlus />}>
            Добавить
          </Button>
        </Flex>
      </Flex>

      {/* Table */}
      <Box
        border="2px solid"
        borderColor={borderColor}
        borderRadius="10px"
        overflow="hidden"
      >
        <Flex bg={headerBg} p="12px" fontWeight="bold">
          <Box w="40%">Пользователь</Box>
          <Box w="20%">Роль</Box>
          <Box w="20%">Статус</Box>
          <Box w="20%" textAlign="right">
            Действия
          </Box>
        </Flex>

        {filteredUsers.map((user) => (
          <Flex
            key={user.id}
            p="12px"
            borderTop="1px solid"
            borderColor={borderColor}
            align="center"
            _hover={{ bg: hoverBg }}
          >
            <Box w="40%">
              <Flex align="center" gap="10px">
                <Avatar.Root size="sm">
                  <Avatar.Fallback>{user.avatar}</Avatar.Fallback>
                </Avatar.Root>

                <Box>
                  <Text fontWeight="bold">{user.name}</Text>
                  <Text fontSize="sm" opacity="0.7">
                    {user.email}
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box w="20%">
              <Badge>{user.role}</Badge>
            </Box>

            <Box w="20%">
              <Badge colorPalette={user.status === "active" ? "green" : "red"}>
                {user.status}
              </Badge>
            </Box>

            <Box w="20%" textAlign="right">
              <Flex justify="flex-end" gap="5px">
                <IconButton
                  icon={<TbPencil color={borderColor} />}
                  onClick={() => openEdit(user)}
                />
                <IconButton
                  icon={<TbTrash />}
                  onClick={() => deleteUser(user.id)}
                />
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>

      {/* Modal */}
      {isOpen && (
        <UserModal
          user={editingUser}
          onClose={() => setIsOpen(false)}
          onSave={saveUser}
          borderColor={borderColor}
          bgColor={bgColor}
          inputBg={inputBg}
        />
      )}
    </Flex>
  );
}

// ===== Modal =====
function UserModal({ user, onClose, onSave, borderColor, bgColor, inputBg }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
    status: "active",
  });

  useEffect(() => {
    setForm({
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "User",
      status: user?.status || "active",
    });
  }, [user]);

  return (
    <Flex
      position="fixed"
      inset="0"
      bg="rgba(0,0,0,0.6)"
      align="center"
      justify="center"
      zIndex={1400}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Box
        bg={bgColor}
        p="20px"
        borderRadius="10px"
        border="2px solid"
        borderColor={borderColor}
      >
        <Heading size="md" mb="15px">
          {user ? "Редактировать" : "Добавить"} пользователя
        </Heading>

        <Flex direction="column" gap="10px">
          <Input
            placeholder="Имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            bg={inputBg}
          />

          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            bg={inputBg}
          />

          {/* НАТИВНЫЙ SELECT (без багов Chakra v3) */}
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>

          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="active">Активен</option>
            <option value="inactive">Не активен</option>
          </select>

          <Button onClick={() => onSave(form)}>
            {user ? "Сохранить" : "Создать"}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
