import type { ITodo } from "@/models/Todo";
import React, { useState } from "react";
import TodoCard from "./TodoCard";
import InputText from "@/components/common/InputText/Indenx";
import Button from "@/components/common/Button/Index";
import TextArea from "@/components/common/TextArea/Index";
import Switch from "@/components/common/Switch/Index";



// B1: tạo interface
// B2 : tạo state danh sách công việc và hiển thị UI danh sách công việc ra màn hình (bao gồm UI components TodoCard)
//B3 : UI Form InputText(tên công việc), TextArea(mô tả công việc), Switch (trạng thái hoàn thành), Button(thêm công việc) +state input nhập nội dung công việc (todoName,todoScip,todoCpmple)
//B4 : khi nhập nội dung cộng việc voà input và click button thêm công việc thì công việc mới sẽ được thêm vào danh sách công việc và cập nhật state todos, reset state inout nhập nội dung công việc + validate nếu có

//tìm hiểu: 1. cập nhật một công việc trong danh sách công việc 2. xoá 1 cv trong danh sách công việc  3. Hiển thị chi tiết công việc )modal, page detail
function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDesciption] = useState("");
    const [todoCompleted, setTodoCompleted] = useState(false);

    const handleCreateTodo = () => {
        if (!todoName.trim()) {
            alert("Vui long nhap noi dung cong viec");
            return;
        }

        const newTodo: ITodo = {
            name: todoName,
            desciption: todoDescription,
            completed: todoCompleted

        };

        setTodos((prev) => [newTodo, ...prev]);
        setTodoName("");
        setTodoDesciption("");
        setTodoCompleted(false);
    };

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">
                    Todo App
                </h1>

                {/* Form */}

                <div className="mb-6 flex flex-col gap-2">
                    <InputText
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                        placeholder="Nhap noi dung cong viec"
                        className="bg-white flex-1"
                    />

                    <TextArea
                        value={todoDescription}
                        onChange={(e) => setTodoDesciption(e.target.value)}
                        placeholder="Nhap mo ta cong viec"
                    />

                    <div>
                        <label>Hoàn Thành</label>
                        <Switch
                            checked={todoCompleted}
                            onChange={(e) => setTodoCompleted(e.target.checked)}
                        />
                    </div>
                    <Button onClick={handleCreateTodo}>Them cong viec</Button>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="divide-y divide-gray-200">
                        {todos.length > 0 ? (
                            todos.map((todo) => <TodoCard todo={todo} />)
                        ) : (
                            <div className="flex items-center justify-center h-screen">
                                <p className="text-gray-500">No todos yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Todo;
