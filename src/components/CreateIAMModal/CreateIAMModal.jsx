import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return css`
          background-color: #fff;
          border: 1px solid #d1d5db;
          &:hover {
            background-color: #f3f4f6;
          }
        `;
      default:
        return css`
          background-color: rgb(0, 0, 0);
          border: 1px solid rgb(0, 0, 0);
          color: rgb(255, 255, 255);
          &:hover {
            background-color: #3c3b3b);
          }
        `;
    }
  }}
`;

const CreateIAMModal = () => (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg space-y-4">
      <div className="mb-4 text-lg">Create IAM</div>
      <select className="border rounded-md border-gray-300 p-2 w-full">
        <option value="role">Role</option>
        <option value="user">User</option>
      </select>
      <input
        className="border rounded-md border-gray-300 p-2 w-full"
        placeholder="Enter IAM name"
      />
      <div className="flex justify-end gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button>Create</Button>
      </div>
    </div>
  </div>
);

export default CreateIAMModal;
