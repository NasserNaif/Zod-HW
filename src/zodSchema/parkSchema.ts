import { z, TypeOf } from "zod";

export const parkSchema = z.object({
  body: z.object({
    id: z
      .string({ required_error: "ID is required !" })
      .min(2, "ID must be more than 2 !"),
    name: z
      .string({ required_error: "Name is required !" })
      .min(4, "name must be more than 4 !"),
    type: z.enum(["rollecoaster", "thriller", "water"], {
      required_error:
        "type is required  and must be one of this array [`rollecoaster`, `thriller`, `water`]",
    }),
    tickets: z.number({ required_error: "tickets is required !" }),
    price: z.number({ required_error: "price is required !" }),
  }),
});

export type parkType = TypeOf<typeof parkSchema>["body"];
