import { useState, useRef, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { formatRupiah } from "../../../../utils/format";
import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import {
  PRODUCT_STATUS_LABELS,
  PRODUCT_STATUS_COLORS,
} from "../config/statusConfig";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import StatusLabel from "../../../../components/ui/StatusLabel";
import FilterStatus from "../../../../components/filters/Status";

const ProductFormModal = ({ product, mode = "view", onSave, onCancel }) => {
  const getInitialData = () => {
    if (mode === "add") {
      return {
        name: "",
        price: "",
        stock: "",
        category: "Roti",
      };
    }
    return {
      name: product?.name || "",
      price: product?.price || 0,
      stock: product?.stock || 0,
      category: product?.category || "Roti",
    };
  };

  const [formData, setFormData] = useState(getInitialData());
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const isEditable = mode === "edit" || mode === "add";
  const isAddMode = mode === "add";

  const currentImageUrl =
    imagePreview ||
    (isAddMode
      ? "/assets/images/white.webp"
      : product?.image || "/assets/images/product.png");

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  return (
    <div className="grid grid-cols-12 max-h-[85dvh] w-[90vw] md:w-[inherit] md:max-h-[inherit] overflow-y-auto">
      {/* img */}
      <div className="col-span-12 md:col-span-6 md:max-w-md xl:max-w-xl 2xl:max-w-2xl rounded-t-md md:rounded-t-none md:rounded-l-lg overflow-hidden relative">
        <div className="w-full h-full relative">
          {isEditable && (
            <>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/40 transition"
                onClick={() => fileInputRef.current?.click()}
              >
                {isAddMode ? (
                  <BiImageAdd size={48} color="white" />
                ) : (
                  <span className="text-white font-medium bg-black/40 px-2 py-1 rounded">
                    Click to change image
                  </span>
                )}
              </div>
            </>
          )}
          <img
            src={currentImageUrl}
            alt={isAddMode ? "New product" : "Product"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* form*/}
      <div className="col-span-12 md:col-span-6 p-4 xl:p-5">
        <h2 className="text-xl 2xl:text-2xl text-center mb-7">
          {mode === "add"
            ? "Add New Product"
            : isEditable
            ? "Edit Product"
            : "Product Detail"}
        </h2>

        <div className="flex flex-col gap-2 xl:gap-4 mb-2">
          {!isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple">
                Product ID
              </span>{" "}
              <br />
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {product.id}
              </span>
            </div>
          )}

          {/* Name */}
          <div>
            {isEditable ? (
              <Input
                label="Name"
                placeholder="Product Name"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Name</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* Price */}
          <div>
            {isEditable ? (
              <Input
                label="Price"
                placeholder="Product Price"
                classNameLabel="text-base 2xl:text-xl text-purple"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Price</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {formatRupiah(product.price)}
                </span>
              </div>
            )}
          </div>

          {/* Stock */}
          <div>
            {isEditable ? (
              <Input
                label="Stock"
                placeholder="Product Stock"
                classNameLabel="text-base 2xl:text-xl text-purple"
                type="number"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Stock</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {product.stock}
                </span>
              </div>
            )}
          </div>

          {/* Category */}
          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-1">
              Category
            </span>
            {isEditable ? (
              <FilterStatus
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="h-11"
                options={[
                  { value: "Roti", label: "Roti" },
                  { value: "Minuman", label: "Minuman" },
                  { value: "Snack", label: "Snack" },
                ]}
              />
            ) : (
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {product.category}
              </span>
            )}
          </div>

          {/* Status */}
          {!isEditable && !isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple block mb-1">
                Status
              </span>
              <StatusLabel
                variant={getStatusColor(product.status, PRODUCT_STATUS_COLORS)}
                label={formatStatusLabel(product.status, PRODUCT_STATUS_LABELS)}
              />
            </div>
          )}

          {/* btn */}
          <div className="mt-5">
            {isEditable ? (
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" onClick={onCancel} label="Cancel" />
                <Button
                  onClick={handleSave}
                  label={isAddMode ? "Add Product" : "Save Changes"}
                />
              </div>
            ) : (
              <div className="grid">
                <Button variant="primary" onClick={onCancel} label="Close" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormModal;
