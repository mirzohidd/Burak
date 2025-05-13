import Errors, { HttpCode, Message } from "../libs/Error";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewModel;

  constructor() {
    this.viewModel = ViewModel;
  }

  public async checkViewExistence(input: ViewInput): Promise<View> {
    return await this.viewModel.findOne({ memberId: input.memberId, viewRefId: input.viewRefId }).exec();
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
        console.log("Inserting new view:", input);
        const newView = await this.viewModel.create(input);
        console.log("View inserted:", newView);
        return newView;
    } catch (err) {
      console.log("ERROR, model:insertMemberView:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
