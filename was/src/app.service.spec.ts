import { AppService } from './app.service';
import { Test } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

const mockCacheManager = {};

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        AppService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });
});
