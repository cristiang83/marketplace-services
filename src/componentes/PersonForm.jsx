import { Controller } from "react-hook-form";
import { ImageInput } from "./ImageInput";

export function PersonForm({
  form,
  onSaveData,
  service_types,
  isPending,
  submitLabel,
}) {
  return (
    <form onSubmit={form.handleSubmit(onSaveData)}>
      <label className="form-label">Name and Lastname</label>
      <input type="text" {...form.register("name")} className="form-control" />
      {form.formState.errors.name && (
        <div className="text-danger">{form.formState.errors.name?.message}</div>
      )}

      <label className="form-label">DOB</label>
      <input
        type="date"
        {...form.register("dob", { valueAsDate: true })}
        className="form-control"
      />
      {form.formState.errors.dob && (
        <div className="text-danger">{form.formState.errors.dob?.message}</div>
      )}

      <label className="form-label">Email</label>
      <input type="text" {...form.register("email")} className="form-control" />
      {form.formState.errors.email && (
        <div className="text-danger">
          {form.formState.errors.email?.message}
        </div>
      )}

      <label className="form-label">Phone</label>
      <input type="text" {...form.register("phone")} className="form-control" />
      {form.formState.errors.phone && (
        <div className="text-danger">
          {form.formState.errors.phone?.message}
        </div>
      )}

      <label className="form-label">Address</label>
      <input
        type="text"
        {...form.register("address")}
        className="form-control"
      />
      {form.formState.errors.address && (
        <div className="text-danger">
          {form.formState.errors.address?.message}
        </div>
      )}

      <label className="form-label">Services</label>
      <select {...form.register("service_types_id")} className="form-control">
        <option value="">---</option>
        {service_types?.map((service_types) => (
          <option key={service_types.id} value={service_types.id}>
            {service_types.name}
          </option>
        ))}
      </select>
      {form.formState.errors.service_types_id && (
        <div className="text-danger">
          {form.formState.errors.service_types_id?.message}
        </div>
      )}

      <label className="form-label">Description</label>
      <input
        type="text"
        {...form.register("description")}
        className="form-control"
      />
      {form.formState.errors.description && (
        <div className="text-danger">
          {form.formState.errors.description?.message}
        </div>
      )}

      <label className="form-label">Picture</label>
      <div>
        <Controller
          control={form.control}
          name="picture"
          render={({ field }) => (
            <ImageInput
              bucket="pictures"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {form.formState.errors.picture && (
          <div className="text-danger">
            {form.formState.errors.picture?.message}
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-success" disabled={isPending}>
        {isPending ? "Saving data..." : submitLabel}
      </button>
    </form>
  );
}
