import { Inject, Injectable } from '@nestjs/common'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './models/recipe.model'
import { ClickHouseClient } from '@depyronick/nestjs-clickhouse'

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  // constructor(
  //   @Inject('ANALYTICS_SERVER')
  //   private analyticsServer: ClickHouseClient,
  // ) {
  // }

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    const tmp = []

    for (let i = 0; i < 10; i++) {
      tmp.push({
        id: 'test',
        ingredients: ['lifestyle'],
        description:
          ' s customised to each of our markets. Discover the world ...\n',
      })
    }
    //
    // console.log(await this.analyticsServer.queryPromise(`SELECT
    //                                                arrayFilter(x -> x LIKE '%CVE%', tags) AS cve, first_seen, last_seen, count, tags, references, description
    //                                              FROM
    //                                                anglerfish.exploit_rules_dist
    //                                                limit 10`));

    return tmp as Recipe[]
  }

  async remove(id: string): Promise<boolean> {
    return true
  }
}
