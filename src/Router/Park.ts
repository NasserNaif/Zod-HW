import expres from "express";
import validate from "../middleware/validate";
import { parkSchema, parkType } from "../zodSchema/parkSchema";

export const parkRouter = expres();

let rideArr: parkType[] = [];
rideArr.push({
  id: "234",
  name: "water trip",
  type: "water",
  tickets: 7,
  price: 170,
});

parkRouter.get(`/`, (req, res) => {
  return res.json(rideArr);
});

parkRouter.post(`/`, validate(parkSchema), (req, res) => {
  const newRide = req.body as parkType;
  rideArr.push(newRide);

  return res.json({
    message: "item added !",
  });
});

parkRouter.put(`/:id`, validate(parkSchema), (req, res) => {
  const { id } = req.params;
  const updateObj = req.body as parkType;
  rideArr.map((upd) => {
    if (upd.id === id || upd.name === id) {
      upd.id = updateObj.id;
      upd.name = updateObj.name;
      upd.type = updateObj.type;
      upd.tickets = updateObj.tickets;
      upd.price = updateObj.price;
    }
  });

  return res.json({
    message: "item updated !",
  });
});

parkRouter.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const newRideArr = rideArr.filter((del) => {
    return del.id !== id ;
  });

  rideArr = newRideArr;

  return res.json({
    message: "item deleted !",
  });
});
