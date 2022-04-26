import { Module } from '@nestjs/common'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'
import { DateScalar } from '../../common/scalars/date.scalar'

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule {}
