import { z } from "zod";

const Example = z.object({
  content: z.string().emoji("Only emojis are allowed").min(1).max(280),
});

export const ZodSchemas = {
  Example,
};

// in formik use validationSchema={toFormikValidationSchema(ZodSchemas.Example)}
