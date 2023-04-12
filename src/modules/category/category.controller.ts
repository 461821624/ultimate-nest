import { GenericController } from "@common/decorators";
import { Tag } from "@entities";
import { BaseController } from "@modules/base/base.controller";

import { CategoryService } from "./category.service";

@GenericController("categories")
export class CategoryController extends BaseController<Tag> {
	// @ts-expect-error: Unused import error
	constructor(private tagsService: CategoryService) {
		super(tagsService);
	}
}